import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlagElement
 * @class IconOutlineFlagElement
 * @extends {AoflElement}
 */
class IconOutlineFlagElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlagElement.is, IconOutlineFlagElement);

export default IconOutlineFlagElement;
