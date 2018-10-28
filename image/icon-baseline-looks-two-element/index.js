import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooksTwoElement
 * @class IconBaselineLooksTwoElement
 * @extends {AoflElement}
 */
class IconBaselineLooksTwoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooksTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooksTwoElement.is, IconBaselineLooksTwoElement);

export default IconBaselineLooksTwoElement;
