import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWcElement
 * @class IconRoundWcElement
 * @extends {AoflElement}
 */
class IconRoundWcElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWcElement.is, IconRoundWcElement);

export default IconRoundWcElement;
