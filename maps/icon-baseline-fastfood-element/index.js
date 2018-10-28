import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFastfoodElement
 * @class IconBaselineFastfoodElement
 * @extends {AoflElement}
 */
class IconBaselineFastfoodElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFastfoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fastfood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFastfoodElement.is, IconBaselineFastfoodElement);

export default IconBaselineFastfoodElement;
