import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewArrayElement
 * @class IconRoundViewArrayElement
 * @extends {AoflElement}
 */
class IconRoundViewArrayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewArrayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-array';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewArrayElement.is, IconRoundViewArrayElement);

export default IconRoundViewArrayElement;
