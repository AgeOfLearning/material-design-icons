import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFiberDvrElement
 * @class IconBaselineFiberDvrElement
 * @extends {AoflElement}
 */
class IconBaselineFiberDvrElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFiberDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fiber-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFiberDvrElement.is, IconBaselineFiberDvrElement);

export default IconBaselineFiberDvrElement;
