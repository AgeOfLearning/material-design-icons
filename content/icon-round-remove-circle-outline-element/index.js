import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveCircleOutlineElement
 * @class IconRoundRemoveCircleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundRemoveCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveCircleOutlineElement.is, IconRoundRemoveCircleOutlineElement);

export default IconRoundRemoveCircleOutlineElement;
