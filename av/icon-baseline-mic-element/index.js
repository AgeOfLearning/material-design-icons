import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMicElement
 * @class IconBaselineMicElement
 * @extends {AoflElement}
 */
class IconBaselineMicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMicElement.is, IconBaselineMicElement);

export default IconBaselineMicElement;
