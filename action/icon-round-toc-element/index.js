import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTocElement
 * @class IconRoundTocElement
 * @extends {AoflElement}
 */
class IconRoundTocElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTocElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-toc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTocElement.is, IconRoundTocElement);

export default IconRoundTocElement;
