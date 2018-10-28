import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAllInclusiveElement
 * @class IconRoundAllInclusiveElement
 * @extends {AoflElement}
 */
class IconRoundAllInclusiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAllInclusiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-all-inclusive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAllInclusiveElement.is, IconRoundAllInclusiveElement);

export default IconRoundAllInclusiveElement;
