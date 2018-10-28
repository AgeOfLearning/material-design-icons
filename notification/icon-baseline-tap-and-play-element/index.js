import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTapAndPlayElement
 * @class IconBaselineTapAndPlayElement
 * @extends {AoflElement}
 */
class IconBaselineTapAndPlayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTapAndPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tap-and-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTapAndPlayElement.is, IconBaselineTapAndPlayElement);

export default IconBaselineTapAndPlayElement;
