import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTitleElement
 * @class IconRoundTitleElement
 * @extends {AoflElement}
 */
class IconRoundTitleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTitleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-title';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTitleElement.is, IconRoundTitleElement);

export default IconRoundTitleElement;
