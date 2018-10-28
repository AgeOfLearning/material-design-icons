import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNextWeekElement
 * @class IconRoundNextWeekElement
 * @extends {AoflElement}
 */
class IconRoundNextWeekElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNextWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-next-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNextWeekElement.is, IconRoundNextWeekElement);

export default IconRoundNextWeekElement;
