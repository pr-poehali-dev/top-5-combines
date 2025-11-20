import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const combines = [
  {
    id: 1,
    name: "John Deere S790",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/78f01cda-a7ac-4ed5-8a86-d330de564a63.jpg",
    price: "24 500 000 ₽",
    power: "449 л.с.",
    capacity: "14 500 л",
    width: "10.7 м",
    productivity: "до 60 т/ч",
    country: "США"
  },
  {
    id: 2,
    name: "Case IH Axial-Flow 9250",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/cf53d5b4-c39c-4eb9-8510-1bf684e51122.jpg",
    price: "26 800 000 ₽",
    power: "543 л.с.",
    capacity: "16 400 л",
    width: "13.7 м",
    productivity: "до 75 т/ч",
    country: "США"
  },
  {
    id: 3,
    name: "CLAAS LEXION 8900",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/e8895140-b011-4d76-97a5-8f0ff527a68c.jpg",
    price: "28 300 000 ₽",
    power: "585 л.с.",
    capacity: "18 000 л",
    width: "13.8 м",
    productivity: "до 80 т/ч",
    country: "Германия"
  },
  {
    id: 4,
    name: "New Holland CR11.90",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/3d9cb780-5d57-473f-9b19-8fea4d8d2d3a.jpg",
    price: "25 900 000 ₽",
    power: "653 л.с.",
    capacity: "17 100 л",
    width: "13.7 м",
    productivity: "до 82 т/ч",
    country: "США"
  },
  {
    id: 5,
    name: "Massey Ferguson IDEAL 10T",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/23c986c6-e0c4-431c-9629-b414fdd2809a.jpg",
    price: "23 700 000 ₽",
    power: "647 л.с.",
    capacity: "17 100 л",
    width: "13.7 м",
    productivity: "до 78 т/ч",
    country: "США"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="relative">
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">ТОП-5 Комбайнов</h1>
                  <p className="text-sm text-muted-foreground">Крупнейшие машины мира</p>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Icon name="Phone" size={18} />
                Консультация
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Премиум техника
            </Badge>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Самые мощные комбайны
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная техника для масштабных аграрных предприятий
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {combines.map((combine) => (
              <Card 
                key={combine.id} 
                className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={combine.image} 
                    alt={combine.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    #{combine.id}
                  </Badge>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{combine.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {combine.country}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Zap" size={16} className="text-primary" />
                        Мощность
                      </span>
                      <span className="font-semibold text-foreground">{combine.power}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Fuel" size={16} className="text-secondary" />
                        Бункер
                      </span>
                      <span className="font-semibold text-foreground">{combine.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Maximize2" size={16} className="text-primary" />
                        Жатка
                      </span>
                      <span className="font-semibold text-foreground">{combine.width}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="TrendingUp" size={16} className="text-secondary" />
                        Производ.
                      </span>
                      <span className="font-semibold text-foreground">{combine.productivity}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="text-3xl font-bold text-primary mb-4">
                      {combine.price}
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                        Купить
                        <Icon name="ShoppingCart" size={18} className="ml-2 transition-transform group-hover:scale-110" />
                      </Button>
                      <Button variant="outline" className="w-full border-secondary/50 hover:bg-secondary/10 hover:border-secondary text-foreground">
                        Подробнее
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Гарантия качества</h3>
                <p className="text-muted-foreground">Официальная гарантия производителя до 5 лет</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <Icon name="Wrench" size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Сервисное обслуживание</h3>
                <p className="text-muted-foreground">Техподдержка 24/7 по всей России</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="CreditCard" size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Выгодный лизинг</h3>
                <p className="text-muted-foreground">Гибкие условия финансирования</p>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t border-border/50 mt-20 py-8 bg-card/30 backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">© 2025 ТОП-5 Комбайнов. Все права защищены.</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="MapPin" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
