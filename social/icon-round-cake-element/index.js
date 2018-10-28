import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCakeElement
 * @class IconRoundCakeElement
 * @extends {AoflElement}
 */
class IconRoundCakeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCakeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cake';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCakeElement.is, IconRoundCakeElement);

export default IconRoundCakeElement;
