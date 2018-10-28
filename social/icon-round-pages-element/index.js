import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPagesElement
 * @class IconRoundPagesElement
 * @extends {AoflElement}
 */
class IconRoundPagesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPagesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pages';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPagesElement.is, IconRoundPagesElement);

export default IconRoundPagesElement;
