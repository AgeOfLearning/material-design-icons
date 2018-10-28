import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArchiveElement
 * @class IconRoundArchiveElement
 * @extends {AoflElement}
 */
class IconRoundArchiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-archive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArchiveElement.is, IconRoundArchiveElement);

export default IconRoundArchiveElement;
