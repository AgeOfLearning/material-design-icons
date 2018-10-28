import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMicOffElement
 * @class IconBaselineMicOffElement
 * @extends {AoflElement}
 */
class IconBaselineMicOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mic-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMicOffElement.is, IconBaselineMicOffElement);

export default IconBaselineMicOffElement;
