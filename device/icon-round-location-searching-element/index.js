import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocationSearchingElement
 * @class IconRoundLocationSearchingElement
 * @extends {AoflElement}
 */
class IconRoundLocationSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocationSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-location-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocationSearchingElement.is, IconRoundLocationSearchingElement);

export default IconRoundLocationSearchingElement;
