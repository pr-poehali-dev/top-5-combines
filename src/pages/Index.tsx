import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const combines = [
  {
    id: 1,
    name: "John Deere X9 1100",
    manufacturer: "John Deere",
    price: "725 000 $",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/48ae9a0f-74c6-4a5f-8760-a86629919ae5.jpg",
    specs: {
      power: "690 л.с.",
      tank: "16 200 л",
      width: "13.7 м",
      productivity: "72 т/ч"
    },
    features: ["Автопилот", "Система ночного видения", "AI управление"]
  },
  {
    id: 2,
    name: "CASE IH Axial-Flow 9250",
    manufacturer: "CASE IH",
    price: "685 000 $",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/50265597-4978-452b-8223-792de3befb32.jpg",
    specs: {
      power: "652 л.с.",
      tank: "15 900 л",
      width: "13.7 м",
      productivity: "68 т/ч"
    },
    features: ["CrossTrack", "Axial-Flow ротор", "Автоматическая настройка"]
  },
  {
    id: 3,
    name: "Fendt IDEAL 10T",
    manufacturer: "Fendt",
    price: "695 000 $",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/a8767bdc-0ae9-46a7-aaf2-4679e2ce0bce.jpg",
    specs: {
      power: "653 л.с.",
      tank: "17 100 л",
      width: "13.8 м",
      productivity: "70 т/ч"
    },
    features: ["IDEALdrive", "IDEALharvest", "Цифровая диагностика"]
  },
  {
    id: 4,
    name: "New Holland CR11.90",
    manufacturer: "New Holland",
    price: "705 000 $",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/3f7bb6d4-1172-47b3-aaa6-93d26b95206e.jpg",
    specs: {
      power: "653 л.с.",
      tank: "17 800 л",
      width: "13.7 м",
      productivity: "71 т/ч"
    },
    features: ["IntelliSense", "Twin Rotor", "Precision Land Management"]
  },
  {
    id: 5,
    name: "Claas Lexion 8900",
    manufacturer: "Claas",
    price: "715 000 $",
    image: "https://cdn.poehali.dev/projects/65113b2e-5794-4364-a81c-d4de4bf19833/files/a01d60e5-a292-40e0-901e-83bfa4d72be1.jpg",
    specs: {
      power: "653 л.с.",
      tank: "18 000 л",
      width: "13.8 м",
      productivity: "72 т/ч"
    },
    features: ["CEMOS Automatic", "Terra Trac", "CEBIS система"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Tractor" className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    ТОП-5 Комбайнов
                  </h1>
                  <p className="text-sm text-muted-foreground">Мировые лидеры агротехники</p>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                <Icon name="Phone" size={18} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Icon name="Award" size={14} className="mr-1" />
              Лучшие модели 2025
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Крупнейшие комбайны мира
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Высокопроизводительная техника для промышленного земледелия с передовыми технологиями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {combines.map((combine, index) => (
              <Card key={combine.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={combine.image} 
                    alt={combine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 text-lg px-3 py-1">
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">{combine.manufacturer}</p>
                    <h3 className="text-2xl font-bold mb-2">{combine.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {combine.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Zap" size={16} className="text-primary" />
                        <span className="text-sm">Мощность</span>
                      </div>
                      <span className="font-semibold">{combine.specs.power}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Container" size={16} className="text-accent" />
                        <span className="text-sm">Бункер</span>
                      </div>
                      <span className="font-semibold">{combine.specs.tank}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Ruler" size={16} className="text-primary" />
                        <span className="text-sm">Ширина жатки</span>
                      </div>
                      <span className="font-semibold">{combine.specs.width}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Gauge" size={16} className="text-accent" />
                        <span className="text-sm">Производительность</span>
                      </div>
                      <span className="font-semibold">{combine.specs.productivity}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Особенности</p>
                    <div className="flex flex-wrap gap-2">
                      {combine.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                    <Button variant="outline" className="w-full border-2">
                      <Icon name="Info" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary via-secondary/95 to-accent/20 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Headphones" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-4">Нужна консультация?</h3>
              <p className="text-white/80 mb-6 text-lg">
                Наши специалисты помогут подобрать оптимальную модель для ваших задач и расскажут о возможностях лизинга
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-0">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Написать письмо
                </Button>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t bg-card/50 backdrop-blur-sm mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Tractor" className="text-white" size={22} />
                </div>
                <span className="font-semibold">ТОП-5 Комбайнов</span>
              </div>
              <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
