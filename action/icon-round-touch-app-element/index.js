import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTouchAppElement
 * @class IconRoundTouchAppElement
 * @extends {AoflElement}
 */
class IconRoundTouchAppElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTouchAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-touch-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTouchAppElement.is, IconRoundTouchAppElement);

export default IconRoundTouchAppElement;
