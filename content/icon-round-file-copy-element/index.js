import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFileCopyElement
 * @class IconRoundFileCopyElement
 * @extends {AoflElement}
 */
class IconRoundFileCopyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFileCopyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-file-copy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFileCopyElement.is, IconRoundFileCopyElement);

export default IconRoundFileCopyElement;
