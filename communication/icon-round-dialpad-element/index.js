import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDialpadElement
 * @class IconRoundDialpadElement
 * @extends {AoflElement}
 */
class IconRoundDialpadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDialpadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dialpad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDialpadElement.is, IconRoundDialpadElement);

export default IconRoundDialpadElement;
