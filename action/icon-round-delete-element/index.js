import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeleteElement
 * @class IconRoundDeleteElement
 * @extends {AoflElement}
 */
class IconRoundDeleteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeleteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-delete';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeleteElement.is, IconRoundDeleteElement);

export default IconRoundDeleteElement;
