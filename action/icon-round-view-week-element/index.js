import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewWeekElement
 * @class IconRoundViewWeekElement
 * @extends {AoflElement}
 */
class IconRoundViewWeekElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewWeekElement.is, IconRoundViewWeekElement);

export default IconRoundViewWeekElement;
