import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const combines = [
  {
    id: 1,
    name: "Claas Lexion 8900",
    manufacturer: "Claas",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/55084ad2-b5d9-4acd-9dbf-e6c1a822e7f1.jpg",
    price: "28 500 000 ₽",
    power: "790 л.с.",
    capacity: "18 000 л",
    performance: "120 т/час",
    width: "13.8 м",
    featured: true
  },
  {
    id: 2,
    name: "Case IH Axial-Flow 9250",
    manufacturer: "Case IH",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/defc0e21-04b0-48d0-969f-652a8ee26138.jpg",
    price: "26 800 000 ₽",
    power: "652 л.с.",
    capacity: "16 400 л",
    performance: "110 т/час",
    width: "13.7 м",
    featured: false
  },
  {
    id: 3,
    name: "John Deere S790",
    manufacturer: "John Deere",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/3fb28267-d981-47c8-a8ca-28b8adf926bf.jpg",
    price: "25 900 000 ₽",
    power: "543 л.с.",
    capacity: "15 900 л",
    performance: "105 т/час",
    width: "13.7 м",
    featured: false
  },
  {
    id: 4,
    name: "New Holland CR10.90",
    manufacturer: "New Holland",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/60c3ba9a-22ed-4c0b-91ce-cd4a293dbee1.jpg",
    price: "24 500 000 ₽",
    power: "652 л.с.",
    capacity: "17 100 л",
    performance: "108 т/час",
    width: "13.7 м",
    featured: false
  },
  {
    id: 5,
    name: "AGCO Ideal 10",
    manufacturer: "AGCO",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/5294ed38-f8c0-4380-80a3-109848c3f590.jpg",
    price: "23 200 000 ₽",
    power: "625 л.с.",
    capacity: "16 800 л",
    performance: "102 т/час",
    width: "13.5 м",
    featured: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10">
        <header className="border-b bg-card/80 backdrop-blur-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Wheat" size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    АгроТех
                  </h1>
                  <p className="text-sm text-muted-foreground">Крупнейшие комбайны мира</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg">
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="mb-2 bg-secondary/20 text-secondary-foreground">
              <Icon name="Trophy" size={14} className="mr-1" />
              ТОП-5 2024
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Крупнейшие комбайны
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Самые мощные и производительные зерноуборочные машины для крупных хозяйств
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {combines.map((combine, index) => (
              <Card 
                key={combine.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                      #{index + 1}
                    </Badge>
                    {combine.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-background">
                        <Icon name="Star" size={12} className="mr-1" />
                        Лидер
                      </Badge>
                    )}
                  </div>
                  <img 
                    src={combine.image} 
                    alt={combine.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {combine.name}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {combine.manufacturer}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {combine.price}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Zap" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Мощность</div>
                        <div className="font-semibold text-foreground">{combine.power}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon name="Gauge" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Бункер</div>
                        <div className="font-semibold text-foreground">{combine.capacity}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="TrendingUp" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Производ.</div>
                        <div className="font-semibold text-foreground">{combine.performance}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon name="ArrowLeftRight" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Жатка</div>
                        <div className="font-semibold text-foreground">{combine.width}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-semibold gap-2">
                      <Icon name="ShoppingCart" size={18} />
                      Заказать
                    </Button>
                    <Button variant="outline" className="gap-2 border-border/50 hover:border-primary">
                      <Icon name="Info" size={18} />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto border-border/50 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Headset" size={32} className="text-background" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold text-foreground">Нужна консультация?</h3>
                  <p className="text-muted-foreground">
                    Наши специалисты помогут выбрать оптимальный комбайн для вашего хозяйства
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background gap-2">
                    <Icon name="Phone" size={20} />
                    +7 (800) 555-35-35
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-border/50">
                    <Icon name="MessageCircle" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="relative border-t border-border/50 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Wheat" size={20} className="text-primary" />
                <span>© 2024 АгроТех. Все права защищены</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">О компании</a>
                <a href="#" className="hover:text-primary transition-colors">Контакты</a>
                <a href="#" className="hover:text-primary transition-colors">Доставка</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;