import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCopyrightElement
 * @class IconRoundCopyrightElement
 * @extends {AoflElement}
 */
class IconRoundCopyrightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCopyrightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-copyright';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCopyrightElement.is, IconRoundCopyrightElement);

export default IconRoundCopyrightElement;
