import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLineWeightElement
 * @class IconRoundLineWeightElement
 * @extends {AoflElement}
 */
class IconRoundLineWeightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLineWeightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-line-weight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLineWeightElement.is, IconRoundLineWeightElement);

export default IconRoundLineWeightElement;
