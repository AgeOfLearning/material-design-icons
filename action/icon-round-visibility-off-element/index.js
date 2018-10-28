import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVisibilityOffElement
 * @class IconRoundVisibilityOffElement
 * @extends {AoflElement}
 */
class IconRoundVisibilityOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVisibilityOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-visibility-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVisibilityOffElement.is, IconRoundVisibilityOffElement);

export default IconRoundVisibilityOffElement;
