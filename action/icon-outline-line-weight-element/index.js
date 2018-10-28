import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLineWeightElement
 * @class IconOutlineLineWeightElement
 * @extends {AoflElement}
 */
class IconOutlineLineWeightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLineWeightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-line-weight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLineWeightElement.is, IconOutlineLineWeightElement);

export default IconOutlineLineWeightElement;
