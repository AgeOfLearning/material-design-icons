import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNextWeekElement
 * @class IconSharpNextWeekElement
 * @extends {AoflElement}
 */
class IconSharpNextWeekElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNextWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-next-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNextWeekElement.is, IconSharpNextWeekElement);

export default IconSharpNextWeekElement;
