import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlaceElement
 * @class IconBaselinePlaceElement
 * @extends {AoflElement}
 */
class IconBaselinePlaceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-place';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlaceElement.is, IconBaselinePlaceElement);

export default IconBaselinePlaceElement;
