import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlaceElement
 * @class IconRoundPlaceElement
 * @extends {AoflElement}
 */
class IconRoundPlaceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-place';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlaceElement.is, IconRoundPlaceElement);

export default IconRoundPlaceElement;
