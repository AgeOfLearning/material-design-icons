import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSmokeFreeElement
 * @class IconRoundSmokeFreeElement
 * @extends {AoflElement}
 */
class IconRoundSmokeFreeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSmokeFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-smoke-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSmokeFreeElement.is, IconRoundSmokeFreeElement);

export default IconRoundSmokeFreeElement;
