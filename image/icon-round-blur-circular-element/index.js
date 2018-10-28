import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBlurCircularElement
 * @class IconRoundBlurCircularElement
 * @extends {AoflElement}
 */
class IconRoundBlurCircularElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBlurCircularElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-blur-circular';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBlurCircularElement.is, IconRoundBlurCircularElement);

export default IconRoundBlurCircularElement;
