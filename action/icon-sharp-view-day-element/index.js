import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewDayElement
 * @class IconSharpViewDayElement
 * @extends {AoflElement}
 */
class IconSharpViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewDayElement.is, IconSharpViewDayElement);

export default IconSharpViewDayElement;
