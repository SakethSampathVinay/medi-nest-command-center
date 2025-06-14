
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Play, BookOpen, Clock, Heart, Brain, Stethoscope, Eye } from 'lucide-react';

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Heart Health', icon: Heart, color: 'text-red-500', count: 12 },
    { name: 'Mental Health', icon: Brain, color: 'text-purple-500', count: 8 },
    { name: 'General Health', icon: Stethoscope, color: 'text-blue-500', count: 15 },
    { name: 'Eye Care', icon: Eye, color: 'text-green-500', count: 6 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'Understanding Heart Disease Prevention',
      description: 'Learn about the key factors in preventing cardiovascular disease and maintaining heart health.',
      duration: '8 min read',
      category: 'Heart Health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
      type: 'article'
    },
    {
      id: 2,
      title: 'Managing Stress and Anxiety',
      description: 'Practical techniques for managing daily stress and anxiety for better mental health.',
      duration: '12 min watch',
      category: 'Mental Health',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop',
      type: 'video'
    },
    {
      id: 3,
      title: 'Nutrition Basics for Healthy Living',
      description: 'Essential nutrition guidelines for maintaining a balanced and healthy diet.',
      duration: '6 min read',
      category: 'General Health',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop',
      type: 'article'
    }
  ];

  const recentArticles = [
    {
      title: 'Exercise and Immune System',
      category: 'General Health',
      duration: '5 min read',
      published: '2 days ago'
    },
    {
      title: 'Sleep Hygiene Tips',
      category: 'Mental Health',
      duration: '7 min read',
      published: '1 week ago'
    },
    {
      title: 'Managing High Blood Pressure',
      category: 'Heart Health',
      duration: '10 min read',
      published: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-medical-text mb-2">
            Health Education Hub
          </h1>
          <p className="text-medical-text-secondary">
            Learn about health topics through expert-curated articles and videos
          </p>
        </div>

        {/* Search Bar */}
        <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft mb-6">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-text-secondary w-5 h-5" />
              <Input
                placeholder="Search health topics, conditions, or treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((content)=> (
                <Card key={content.id} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={content.image} 
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {content.type === 'video' ? (
                          <><Play className="w-3 h-3 mr-1" /> Video</>
                        ) : (
                          <><BookOpen className="w-3 h-3 mr-1" /> Article</>
                        )}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{content.category}</Badge>
                      <div className="flex items-center text-sm text-medical-text-secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        {content.duration}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-poppins text-medical-text line-clamp-2">
                      {content.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-medical-text-secondary text-sm line-clamp-3">
                      {content.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold font-poppins mb-2 text-medical-text">
                      {category.name}
                    </h3>
                    <p className="text-medical-text-secondary text-sm mb-3">
                      {category.count} articles available
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle>Recently Published</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-medical-border rounded-lg hover:bg-medical-blue/5 cursor-pointer transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-medical-text mb-1">{article.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-medical-text-secondary">
                          <span>{article.category}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.duration}
                          </div>
                          <span>{article.published}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardContent className="p-12 text-center">
                <BookOpen className="w-16 h-16 text-medical-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-medical-text mb-2">No Saved Articles</h3>
                <p className="text-medical-text-secondary mb-4">
                  Save articles and videos to read them later
                </p>
                <Button variant="outline">Browse Articles</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Learn;
