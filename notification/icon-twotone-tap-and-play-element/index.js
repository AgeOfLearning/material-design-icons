import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTapAndPlayElement
 * @class IconTwotoneTapAndPlayElement
 * @extends {AoflElement}
 */
class IconTwotoneTapAndPlayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTapAndPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tap-and-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTapAndPlayElement.is, IconTwotoneTapAndPlayElement);

export default IconTwotoneTapAndPlayElement;
