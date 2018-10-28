import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVisibilityElement
 * @class IconRoundVisibilityElement
 * @extends {AoflElement}
 */
class IconRoundVisibilityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVisibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-visibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVisibilityElement.is, IconRoundVisibilityElement);

export default IconRoundVisibilityElement;
