import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveElement
 * @class IconRoundRemoveElement
 * @extends {AoflElement}
 */
class IconRoundRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveElement.is, IconRoundRemoveElement);

export default IconRoundRemoveElement;
