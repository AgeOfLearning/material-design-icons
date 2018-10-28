import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCardTravelElement
 * @class IconSharpCardTravelElement
 * @extends {AoflElement}
 */
class IconSharpCardTravelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCardTravelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-card-travel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCardTravelElement.is, IconSharpCardTravelElement);

export default IconSharpCardTravelElement;
