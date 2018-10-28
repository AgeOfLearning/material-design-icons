import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWorkOffElement
 * @class IconRoundWorkOffElement
 * @extends {AoflElement}
 */
class IconRoundWorkOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWorkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-work-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWorkOffElement.is, IconRoundWorkOffElement);

export default IconRoundWorkOffElement;
