import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImageElement
 * @class IconBaselineImageElement
 * @extends {AoflElement}
 */
class IconBaselineImageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImageElement.is, IconBaselineImageElement);

export default IconBaselineImageElement;
