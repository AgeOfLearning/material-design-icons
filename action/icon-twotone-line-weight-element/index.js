import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLineWeightElement
 * @class IconTwotoneLineWeightElement
 * @extends {AoflElement}
 */
class IconTwotoneLineWeightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLineWeightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-line-weight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLineWeightElement.is, IconTwotoneLineWeightElement);

export default IconTwotoneLineWeightElement;
