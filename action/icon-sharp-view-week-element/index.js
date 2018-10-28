import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewWeekElement
 * @class IconSharpViewWeekElement
 * @extends {AoflElement}
 */
class IconSharpViewWeekElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewWeekElement.is, IconSharpViewWeekElement);

export default IconSharpViewWeekElement;
