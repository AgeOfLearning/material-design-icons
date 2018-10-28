import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFastForwardElement
 * @class IconRoundFastForwardElement
 * @extends {AoflElement}
 */
class IconRoundFastForwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFastForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fast-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFastForwardElement.is, IconRoundFastForwardElement);

export default IconRoundFastForwardElement;
