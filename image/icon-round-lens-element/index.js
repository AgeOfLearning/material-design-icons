import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLensElement
 * @class IconRoundLensElement
 * @extends {AoflElement}
 */
class IconRoundLensElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLensElement.is, IconRoundLensElement);

export default IconRoundLensElement;
