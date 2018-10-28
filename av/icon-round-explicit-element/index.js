import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExplicitElement
 * @class IconRoundExplicitElement
 * @extends {AoflElement}
 */
class IconRoundExplicitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExplicitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-explicit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExplicitElement.is, IconRoundExplicitElement);

export default IconRoundExplicitElement;
