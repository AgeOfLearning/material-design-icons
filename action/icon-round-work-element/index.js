import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWorkElement
 * @class IconRoundWorkElement
 * @extends {AoflElement}
 */
class IconRoundWorkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWorkElement.is, IconRoundWorkElement);

export default IconRoundWorkElement;
