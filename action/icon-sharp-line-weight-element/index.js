import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLineWeightElement
 * @class IconSharpLineWeightElement
 * @extends {AoflElement}
 */
class IconSharpLineWeightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLineWeightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-line-weight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLineWeightElement.is, IconSharpLineWeightElement);

export default IconSharpLineWeightElement;
