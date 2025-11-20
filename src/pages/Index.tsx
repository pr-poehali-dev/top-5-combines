import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const combines = [
  {
    id: 1,
    name: "John Deere S790",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/53450ae1-e3a0-43d5-991a-25550765b591.jpg",
    price: "24 500 000 ₽",
    power: "473 л.с.",
    capacity: "16 500 л",
    width: "13.7 м",
    productivity: "45 га/ч",
    badge: "Лидер продаж"
  },
  {
    id: 2,
    name: "CLAAS LEXION 8900",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/dd92221b-6d4e-476f-a877-126cef2f872e.jpg",
    price: "28 900 000 ₽",
    power: "790 л.с.",
    capacity: "18 000 л",
    width: "13.8 м",
    productivity: "60 га/ч",
    badge: "Топ выбор"
  },
  {
    id: 3,
    name: "Case IH Axial-Flow 9250",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/61526ac0-f061-4ed8-90e8-76f7aeea0a5e.jpg",
    price: "26 300 000 ₽",
    power: "543 л.с.",
    capacity: "16 600 л",
    width: "13.7 м",
    productivity: "50 га/ч",
    badge: "Новинка"
  },
  {
    id: 4,
    name: "New Holland CR10.90",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/53450ae1-e3a0-43d5-991a-25550765b591.jpg",
    price: "27 800 000 ₽",
    power: "652 л.с.",
    capacity: "17 100 л",
    width: "13.7 м",
    productivity: "55 га/ч",
    badge: "Премиум"
  },
  {
    id: 5,
    name: "Fendt IDEAL 10",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/dd92221b-6d4e-476f-a877-126cef2f872e.jpg",
    price: "29 500 000 ₽",
    power: "790 л.с.",
    capacity: "18 500 л",
    width: "13.9 м",
    productivity: "62 га/ч",
    badge: "Инновация"
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
                  <Icon name="Combine" fallback="Tractor" size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ТОП-5 Комбайнов
                  </h1>
                  <p className="text-sm text-muted-foreground">Крупнейшие модели 2025</p>
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
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
              Профессиональная техника
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Крупнейшие комбайны мира
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Высокопроизводительные решения для промышленного земледелия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {combines.map((combine, index) => (
              <Card 
                key={combine.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  {combine.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
                      {combine.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4 z-10 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1}
                  </div>
                  <img 
                    src={combine.image} 
                    alt={combine.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {combine.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {combine.price}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Gauge" size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Мощность</p>
                        <p className="font-bold">{combine.power}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Container" size={20} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Бункер</p>
                        <p className="font-bold">{combine.capacity}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Ширина</p>
                        <p className="font-bold">{combine.width}</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Произв.</p>
                        <p className="font-bold">{combine.productivity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                    <Button variant="outline" size="icon" className="border-2 hover:border-primary hover:text-primary">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <CardContent className="p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <Icon name="Sparkles" size={48} className="mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">
                  Нужна консультация по выбору?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Наши специалисты помогут подобрать оптимальную модель под ваши задачи
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Скачать каталог
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="border-t bg-card/80 backdrop-blur-lg mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Combine" fallback="Tractor" size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold">ТОП-5 Комбайнов</p>
                  <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Mail" size={20} />
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
