import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveCircleElement
 * @class IconRoundRemoveCircleElement
 * @extends {AoflElement}
 */
class IconRoundRemoveCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveCircleElement.is, IconRoundRemoveCircleElement);

export default IconRoundRemoveCircleElement;
