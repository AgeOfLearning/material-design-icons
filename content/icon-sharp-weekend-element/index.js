import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWeekendElement
 * @class IconSharpWeekendElement
 * @extends {AoflElement}
 */
class IconSharpWeekendElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWeekendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-weekend';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWeekendElement.is, IconSharpWeekendElement);

export default IconSharpWeekendElement;
